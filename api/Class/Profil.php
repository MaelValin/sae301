<?php
/**
 *  Class Product
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Profil doivent être converti en JSON. Voire la méthode pour plus de détails.
 */

 enum Civilite: string {
    case Madame = 'Madame';
    case Monsieur = 'Monsieur';
}

class Profil implements JsonSerializable {
    private int $idProfil; // id du profil
    private string $nom; // nom du profil
    //rajoute un enum 'Madame','Monsieur'
    private Civilite $civilite; // civilite du profil
    private string $prenom; // prénom du profil
    private string $mail; // mail du profil
    private string $password_hash; // mot de passe haché du profil
    
    


    public function __construct(int $idProfil){
        $this->idProfil = $idProfil;
    }

    /**
     * Get the value of idProfil
     */ 
    public function getIdProfil(): int
    {
        return $this->idProfil;
    }

    /**
     *  Define how to convert/serialize a Product to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Product
     * 
     *  En français : On sait qu'on aura besoin de convertir des Product en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Product dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Product dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Product "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Product en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return [
            "idProfil" => $this->idProfil,
            "nom" => $this->nom,
            "civilite" => $this->civilite,
            "prenom" => $this->prenom,
            "mail" => $this->mail,
            "password_hash" => $this->password_hash
        ];
    }

    /**
     * Get the value of nom
     */ 
    public function getNom(): string
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @return  self
     */ 
    public function setNom(string $nom): self
    {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Get the value of civilite
     */ 
    public function getCivilite(): Civilite
    {
        return $this->civilite;
    }

    /**
     * Set the value of civilite
     *
     * @return  self
     */ 
    public function setCivilite(Civilite $civilite): self
    {
        $this->civilite = $civilite;
        return $this;
    }

    /**
     * Get the value of prenom
     */ 
    public function getPrenom(): string
    {
        return $this->prenom;
    }

    /**
     * Set the value of prenom
     *
     * @return  self
     */ 
    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;
        return $this;
    }

    /**
     * Get the value of mail
     */ 
    public function getMail(): string
    {
        return $this->mail;
    }

    /**
     * Set the value of mail
     *
     * @return  self
     */ 
    public function setMail(string $mail): self
    {
        $this->mail = $mail;
        return $this;
    }

    /**
     * Get the value of password_hash
     */ 
    public function getPasswordHash(): string
    {
        return $this->password_hash;
    }

    /**
     * Set the value of password_hash
     *
     * @return  self
     */ 
    public function setPasswordHash(string $password_hash): self
    {
        $this->password_hash = $password_hash;
        return $this;
    }
}