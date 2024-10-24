<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Profil.php");

/**
 *  Classe ProfilRepository
 * 
 *  Cette classe représente le "stock" de Profil.
 *  Toutes les opérations sur les Profil doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProfilRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($idProfil): ?Profil {
        $requete = $this->cnx->prepare("SELECT * FROM Profil WHERE idProfil=:value");
        $requete->bindParam(':value', $idProfil);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer == false) return null;
        
        $p = new Profil($answer->idProfil, Civilite::from($answer->civilite), $answer->nom, $answer->prenom, $answer->mail, $answer->password_hash);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM Profil");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Profil($obj->idProfil, Civilite::from($obj->civilite), $obj->nom, $obj->prenom, $obj->mail, $obj->password_hash);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($profil){
        $requete = $this->cnx->prepare("INSERT INTO Profil (civilite, nom, prenom, mail, password_hash) VALUES (:civilite, :nom, :prenom, :mail, :password_hash)");
        $civilite = $profil->getCivilite()->value;
        $nom = $profil->getNom();
        $prenom = $profil->getPrenom();
        $mail = $profil->getMail();
        $password_hash = $profil->getPasswordHash();
        $requete->bindParam(':civilite', $civilite);
        $requete->bindParam(':nom', $nom);
        $requete->bindParam(':prenom', $prenom);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':password_hash', $password_hash);

        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $idProfil = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $profil->setIdProfil($idProfil); // set the profil id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($idProfil){
        $requete = $this->cnx->prepare("DELETE FROM Profil WHERE idProfil=:value");
        $requete->bindParam(':value', $idProfil);
        return $requete->execute();
    }

    public function update($profil){
        $requete = $this->cnx->prepare("UPDATE Profil SET nom=:nom, civilite=:civilite, prenom=:prenom, mail=:mail, password_hash=:password_hash WHERE idProfil=:idProfil");
        $idProfil = $profil->getIdProfil();
        $nom = $profil->getNom();
        $civilite = $profil->getCivilite()->value;
        $prenom = $profil->getPrenom();
        $mail = $profil->getMail();
        $password_hash = $profil->getPasswordHash();
        $requete->bindParam(':idProfil', $idProfil);
        $requete->bindParam(':nom', $nom);
        $requete->bindParam(':civilite', $civilite);
        $requete->bindParam(':prenom', $prenom);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':password_hash', $password_hash);

        return $requete->execute();
    }
}