<?php

require_once("Repository/EntityRepository.php");
require_once("Class/ProductOption.php");

/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProductOptionRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?ProductOption{
        $requete = $this->cnx->prepare("select * from Product_Option where id_product_option=:value");
        $requete->bindParam(':value', $id);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer == false) return null;
        
        $p = new ProductOption($answer->id_product_option);
        $p->setIdProduct($answer->id_product);
        $p->setIdOption($answer->id_option);
        $p->setNameOption($answer->name_option);
        $p->setNameProduct($answer->name_product);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("select * from Product_Option");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new ProductOption($obj->id_product_option);
            $p->setIdProduct($obj->id_product);
            $p->setIdOption($obj->id_option);
            $p->setNameOption($obj->name_option);
            $p->setNameProduct($obj->name_product);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($product){
        // Not implemented ! TODO when needed !          
        return false;
    }

    public function delete($id){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($product){
        // Not implemented ! TODO when needed !
        return false;
    }
}
