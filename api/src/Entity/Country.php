<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *   itemOperations={"get"},
 *   normalizationContext={"groups"={"country:read"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\CountryRepository")
 */
class Country
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"country:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"country:read"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=5)
     * @Groups({"country:read"})
     */
    private $code;

    /**
     * @ORM\Column(type="bigint")
     * @Groups({"country:read"})
     */
    private $tonne_per_year;

    /**
     * @ORM\Column(type="float")
     * @Groups({"country:read"})
     */
    private $per_person_per_day;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Continent", inversedBy="countries")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"country:read"})
     */
    private $continent;

    /**
     * @ORM\Column(type="integer")
     */
    private $value;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getTonnePerYear(): ?string
    {
        return $this->tonne_per_year;
    }

    public function setTonnePerYear(string $tonne_per_year): self
    {
        $this->tonne_per_year = $tonne_per_year;

        return $this;
    }

    public function getPerPersonPerDay(): ?float
    {
        return $this->per_person_per_day;
    }

    public function setPerPersonPerDay(float $per_person_per_day): self
    {
        $this->per_person_per_day = $per_person_per_day;

        return $this;
    }

    public function getContinent(): ?Continent
    {
        return $this->continent;
    }

    public function setContinent(?Continent $continent): self
    {
        $this->continent = $continent;

        return $this;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(int $value): self
    {
        $this->value = $value;

        return $this;
    }
}
