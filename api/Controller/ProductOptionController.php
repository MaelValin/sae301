<?php
require_once "Controller.php";
require_once "Repository/ProductOptionRepository.php";

// This class inherits the jsonResponse method and the $cnx property from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class ProductOptionController extends Controller {

    private ProductOptionRepository $productoption;

    public function __construct(){
        $this->productoption = new ProductOptionRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../productoption/{id}
            $p = $this->productoption->find($id);
            return $p == null ? false : $p;
        } else {
            // URI is .../productoption
            $cat = $request->getParam("productoption"); // is there a productoption parameter in the request?
            if ($cat == false) // no request productoption, return all productoption
                return $this->productoption->findAll();
            else // return only productoption of productoption $cat
                return $this->productoption->findAllByproductOption($cat);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new ProductOption(0); // 0 is a symbolic and temporary value since the productoption does not have a real id yet.
        $p->setIdProductOption($obj->id_product_option);
        $p->setIdProduct($obj->id_product);
        $p->setIdOption($obj->id_option);
        $p->setNameOption($obj->name_option);
        $p->setNameProduct($obj->name_product);
        $ok = $this->productoption->save($p); 
        return $ok ? $p : false;
    }
}
?>
