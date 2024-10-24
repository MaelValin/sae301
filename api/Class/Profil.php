<?php
enum Civilite: string {
    case Monsieur = 'Monsieur';
    case Madame = 'Madame';
}

class Profil implements JsonSerializable {
    private int $idProfil; 
    private Civilite $civilite;
    private string $nom;
    private string $prenom;
    private string $mail;
    private string $password_hash;

    public function __construct(int $idProfil, Civilite $civilite, string $nom, string $prenom, string $mail, string $password_hash){
        $this->idProfil = $idProfil;
        $this->civilite = $civilite;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->mail = $mail;
        $this->password_hash = $password_hash;
    }

    public function getIdProfil(): int {
        return $this->idProfil;
    }

    public function jsonSerialize(): array {
        return [
            'idProfil' => $this->idProfil,
            'civilite' => isset($this->civilite) ? $this->civilite->value : null,
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'mail' => $this->mail,
            'password_hash' => $this->password_hash,
        ];
    }

    /**
     * Get the value of idProfil
     */ 

    /**
     * Get the value of civilite
     */
    public function getCivilite(): Civilite {
        return $this->civilite;
    }

    /**
     * Get the value of nom
     */
    public function getNom(): string {
        return $this->nom;
    }

    /**
     * Get the value of prenom
     */
    public function getPrenom(): string {
        return $this->prenom;
    }

    /**
     * Get the value of mail
     */
    public function getMail(): string {
        return $this->mail;
    }

    /**
     * Get the value of password_hash
     */
    public function getPasswordHash(): string {
        return $this->password_hash;
    }

    /**
     * Set the value of idProfil
     */
    public function setIdProfil(int $idProfil): self {
        $this->idProfil = $idProfil;
        return $this;
    }

    /**
     * Set the value of civilite
     */
    public function setCivilite(Civilite $civilite): self {
        $this->civilite = $civilite;
        return $this;
    }

    /**
     * Set the value of nom
     */
    public function setNom(string $nom): self {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Set the value of prenom
     */
    public function setPrenom(string $prenom): self {
        $this->prenom = $prenom;
        return $this;
    }

    /**
     * Set the value of mail
     */
    public function setMail(string $mail): self {
        $this->mail = $mail;
        return $this;
    }

    /**
     * Set the value of password_hash
     */
    public function setPasswordHash(string $password_hash): self {
        $this->password_hash = $password_hash;
        return $this;
    }

    /**
     * Specify data which should be serialized to JSON
     */

}