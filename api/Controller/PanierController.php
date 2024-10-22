<?php
require_once "Controller.php";
require_once "Repository/PanierRepository.php";

// This class inherits the jsonResponse method and the $cnx property from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class PanierController extends Controller {

    private PanierRepository $panier;

    public function __construct(){
        $this->panier = new PanierRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../panier/{id}
            $p = $this->panier->find($id);
            return $p == null ? false : $p;
        } else {
            // URI is .../panier
            $cat = $request->getParam("category"); // is there a category parameter in the request?
            if ($cat == false) // no request category, return all panier
                return $this->panier->findAll();
            else // return only panier of category $cat
                return $this->panier->findAllByCategory($cat);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new Panier(0); // 0 is a symbolic and temporary value since the panier does not have a real id yet.
        $p->setNumber($obj->number);
        $p->setIdProduct($obj->id_product);
        $ok = $this->panier->save($p); 
        return $ok ? $p : false;
    }
}
?>
