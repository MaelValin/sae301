<?php
/**
 *  Class ProductOption
 * 
 *  Représente un produit avec uniquement 5 propriétés (id_product_option, id_product, id_option, name_option, name_product)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe ProductOption doivent être convertis en JSON. Voir la méthode pour plus de détails.
 */
class ProductOption implements JsonSerializable {
    private int $id_product_option; // id de l'option du produit
    private int $id_product; // id du produit
    private int $id_option; // id de l'option
    private string $name_option; // nom de l'option
    private string $name_product; // nom du produit

    public function __construct(int $id_product_option){
        $this->id_product_option = $id_product_option;
    }

    /**
     * Get the value of id_product_option
     */ 
    public function getIdProductOption(): int
    {
        return $this->id_product_option;
    }

    /**
     * Get the value of id_product
     */ 
    public function getIdProduct(): int
    {
        return $this->id_product;
    }

     /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setIdProduct($id_product): self
    {
        $this->id_product = $id_product;
        return $this;
    }

    /**
     * Get the value of id_option
     */ 
    public function getIdOption(): int
    {
        return $this->id_option;
    }


     /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setIdOption($id_option): self
    {
        $this->id_option = $id_option;
        return $this;
    }

    /**
     * Get the value of name_option
     */ 
    public function getNameOption(): string
    {
        return $this->name_option;
    }

     /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setNameOption($name_option): self
    {
        $this->name_option = $name_option;
        return $this;
    }

    /**
     * Get the value of name_product
     */ 
    public function getNameProduct(): string
    {
        return $this->name_product;
    }

     /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setNameProduct($name_product): self
    {
        $this->name_product = $name_product;
        return $this;
    }

    /**
     * Define how to convert/serialize a ProductOption to a JSON format
     * This method will be automatically invoked by json_encode when applied to a ProductOption
     */
    public function jsonSerialize(): mixed {
        return [
            "id_product_option" => $this->id_product_option,
            "id_product" => $this->id_product,
            "id_option" => $this->id_option,
            "name_option" => $this->name_option,
            "name_product" => $this->name_product
        ];
    }
}
