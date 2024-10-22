<?php
/**
 *  Class panier
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Panier implements JsonSerializable {
    private int $id_panier;
    private int $id_product; // id du produit
    private int $number;
    private int $price; // prix du produit

    public function __construct(int $id_panier){
        $this->id_panier = $id_panier;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id_panier;
    }

    /**
     *  Define how to convert/serialize a panier to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a panier
     * 
     *  En français : On sait qu'on aura besoin de convertir des panier en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type panier dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un panier dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que panier "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un panier en JSON.
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
            "id_panier" => $this->id_panier, 
            "id_product" => $this->id_product, 
            "number" => $this->number,
            "price" => $this->price
        ];
    }

    /**
     * Get the value of number
     */ 
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * Set the value of number
     *
     * @return  self
     */ 
    public function setNumber(int $number): self
    {
        $this->number = $number;
        return $this;
    }

    /**
     * Get the value of id_product
     */ 
    public function getIdProduct()
    {
        return $this->id_product;
    }

    /**
     * Set the value of id_product
     *
     * @return  self
     */ 
    public function setIdProduct(int $id_product): self
    {
        $this->id_product = $id_product;
        return $this; // Retourne l'objet lui-même pour permettre les appels en chaîne
    }
    
    /**
     * Get the value of price
     */ 
    public function getPrice(): int
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice(int $price): self
    {
        $this->price = $price;
        return $this;
    }

    /**
     * Set the value of id_panier
     *
     * @return  self
     */ 
    public function setId_panier($id_panier): self
    {
        $this->id_panier = $id_panier;
        return $this;
    }
}