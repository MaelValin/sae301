<?php
require_once "Controller.php";
require_once "Repository/ProfilRepository.php";

// This class inherits the jsonResponse method and the $cnx property from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class ProfilController extends Controller {

    private ProfilRepository $ProfilRepository;

    public function __construct(){
        $this->ProfilRepository = new ProfilRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../profil/{id}
            $p = $this->ProfilRepository->find($id);
            return $p == null ? false : $p;
        } else {
            return $this->ProfilRepository->findAll();
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        try {
            // Read the JSON payload
            $data = file_get_contents("php://input");
            $payload = json_decode($data, true);
    
            // Check if civilite is set
            if (!isset($payload['civilite'])) {
                throw new InvalidArgumentException('Civilite is required.');
            }
    
            // Validate Civilite
            $validCivilites = ['Monsieur', 'Madame'];
            if (!in_array($payload['civilite'], $validCivilites)) {
                throw new InvalidArgumentException('Invalid value for Civilite: ' . $payload['civilite']);
            }
    
            // Extract other parameters
            $nom = $payload['nom'] ?? '';
            $prenom = $payload['prenom'] ?? '';
            $mail = $payload['mail'] ?? '';
            $password = $payload['mdp'] ?? '';
    
            // Validate other parameters
            if (empty($nom) || empty($prenom) || empty($mail) || empty($password)) {
                throw new InvalidArgumentException('All fields are required.');
            }
    
            // Hash the password
            $password_hash = password_hash($password, PASSWORD_BCRYPT);
    
            // Create a new Profil object
            $profil = new Profil(0, Civilite::from($payload['civilite']), $nom, $prenom, $mail, $password_hash);
    
            // Save the profile using the repository
            $success = $this->ProfilRepository->save($profil);
    
            // Check if the save was successful
            if ($success) {
                return json_encode($profil); // Return the created profile in the response
            } else {
                return json_encode(['error' => 'Failed to save profile']);
            }
        } catch (InvalidArgumentException $e) {
            error_log("InvalidArgumentException: " . $e->getMessage());
            return json_encode(['error' => $e->getMessage()]);
        } catch (Exception $e) {
            error_log("Exception: " . $e->getMessage());
            return json_encode(['error' => $e->getMessage()]);
        }
    }
    
    /*
    private function processSignupRequest(HttpRequest $request){
        $mail = $request->getParam("mail");
        $password_hash = $request->getParam("password_hash");

        $user = $this->users->findByEmail($mail);

        if ($user != null){
            return false;
        }

        $hash_password = password_hash($password, PASSWORD_DEFAULT);

        $userdata = [];
        $userdata["mail"] = $mail;
        $userdata["password"] = $hash_password;
        $userdata ["nom"] = $request->getParam('nom');
        $userdata ["prenom"] = $request->getParam('prenom');
        $user = new User($userdata);
        return $this->users->save($user);    
        }
    }*/

    public function login(HttpRequest $request) {
        $mail = $request->getParam("mail");
        $password = $request->getParam("password");

        $profil = $this->ProfilRepository->findByEmail($mail);
        if ($profil && password_verify($password, $profil->getPasswordHash())) {
            return $profil;
        } else {
            http_response_code(401); // Unauthorized
            return false;
        }
    }
}
?>