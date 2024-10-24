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
        
        $p = new Profil($answer->idProfil);
        $p->setNom($answer->nom);
        $p->setCivilite(Civilite::from($answer->civilite));
        $p->setPrenom($answer->prenom);
        $p->setMail($answer->mail);
        $p->setPasswordHash($answer->password_hash);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM Profil");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Profil($obj->idProfil);
            $p->setNom($obj->nom);
            $p->setCivilite(Civilite::from($obj->civilite));
            $p->setPrenom($obj->prenom);
            $p->setMail($obj->mail);
            $p->setPasswordHash($obj->password_hash);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($profil){
        $requete = $this->cnx->prepare("INSERT INTO Profil (nom, civilite, prenom, mail, password_hash) VALUES (:nom, :civilite, :prenom, :mail, :password_hash)");
        $nom = $profil->getNom();
        $civilite = $profil->getCivilite()->value;
        $prenom = $profil->getPrenom();
        $mail = $profil->getMail();
        $password_hash = $profil->getPasswordHash();
        $requete->bindParam(':nom', $nom);
        $requete->bindParam(':civilite', $civilite);
        $requete->bindParam(':prenom', $prenom);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':password_hash', $password_hash);

        $answer = $requete->execute();

        if ($answer){
            $id = $this->cnx->lastInsertId();
            $profil->setIdProfil($id);
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