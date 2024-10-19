<?php
/**
 *  Class option
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Option implements JsonSerializable {
    private int $id_option; // id du produit
    private string $name; // nom du produit
    private int $idcategory; // id de la catégorie du produit
    private string $image; // url de l'image du produit


    public function __construct(int $id_option){
        $this->id_option = $id_option;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id_option;
    }

    /**
     *  Define how to convert/serialize a option to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a option
     * 
     *  En français : On sait qu'on aura besoin de convertir des option en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type option dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un option dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que option "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un option en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return ["id_option" => $this->id_option, "name" => $this->name, "category" => $this->idcategory, "image" => $this->image];
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of idcategory
     */ 
    public function getIdcategory()
    {
        return $this->idcategory;
    }

    /**
     * Set the value of idcategory
     *
     * @return  self
     */ 
    public function setIdcategory(int $idcategory): self
    {
        $this->idcategory = $idcategory;
        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId_option($id_option): self
    {
        $this->id_option = $id_option;
        return $this;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;
        return $this;
    }
    /**
     * Set the value of id
     *
     * @return  self
     */ 

}