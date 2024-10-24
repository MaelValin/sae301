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
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new Profil(0); // 0 est une valeur symbolique et temporaire puisque le profil n'a pas encore d'id réel.
        $p->setNom($obj->nom);
        $p->setCivilite(Profil::Civilite::from($obj->civilite));
        $p->setPrenom($obj->prenom);
        $p->setMail($obj->mail);
        $p->setPasswordHash(password_hash($obj->password, PASSWORD_DEFAULT));
        $ok = $this->profils->save($p);
        return $ok ? $p : false;
    }
}
?>
