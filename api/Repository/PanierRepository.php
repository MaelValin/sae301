<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Panier.php");

/**
 *  Classe PanierRepository
 * 
 *  Cette classe représente le "stock" de Panier.
 *  Toutes les opérations sur les Panier doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class PanierRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id_panier): ?Panier{
        $requete = $this->cnx->prepare("select * from Panier where id_panier=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id_panier); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer == false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Panier($answer->id_panier);
        $p->setIdProduct($answer->id_product);
        $p->setNumber($answer->number);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("select * from Panier");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Panier($obj->id_panier);
            $p->setIdProduct($obj->id_product);
            $p->setNumber($obj->number);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($panier){
        $requete = $this->cnx->prepare("insert into Panier (id_product, number) values (:id_product, :number)");
        $id_product = $panier->getIdProduct();
        $number = $panier->getNumber();
        $requete->bindParam(':id_product', $id_product);
        $requete->bindParam(':number', $number);

        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $panier->setId_panier($id); // set the panier id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($id_panier){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($panier){
        // Not implemented ! TODO when needed !
        return false;
    }
}
