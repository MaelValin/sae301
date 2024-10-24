<?php
require_once "Controller.php";
require_once "Repository/ProfilRepository.php";

// Cette classe hérite de la méthode jsonResponse et de la propriété $cnx de la classe parente Controller
// Seules les méthodes process????Request doivent être (re)définies.

class ProfilController extends Controller {

    private ProfilRepository $profils;

    public function __construct(){
        $this->profils = new ProfilRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI est .../profils/{id}
            $p = $this->profils->find($id);
            return $p == null ? false : $p;
        } else {
            // URI est .../profils
            return $this->profils->findAll();
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
}
?>
