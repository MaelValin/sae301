<?php
require_once "Controller.php";
require_once "Repository/OptionRepository.php"; ;


// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class OptionController extends Controller {

    private OptionRepository $option;

    public function __construct(){
        $this->option = new OptionRepository();
    }

   
    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../option/{id}
            $p = $this->option->find($id);
            return $p==null ? false :  $p;
        }
        else{
            // URI is .../option
            $cat = $request->getParam("option"); // is there a option parameter in the request ?
            if ( $cat == false) // no request option, return all option
                return $this->option->findAll();
            else // return only option of option $cat
                return $this->option->findAllByOption($cat);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new Option(0); // 0 is a symbolic and temporary value since the option does not have a real id yet.
        $p->setName($obj->name);
        $p->setIdcategory($obj->category);
        $ok = $this->option->save($p); 
        return $ok ? $p : false;
    }
   
}

?>