<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PollutionRepository")
 */
class Pollution
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $year;

    /**
     * @ORM\Column(type="bigint")
     */
    private $waste;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country", inversedBy="pollutions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $country;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getWaste(): ?string
    {
        return $this->waste;
    }

    public function setWaste(string $waste): self
    {
        $this->waste = $waste;

        return $this;
    }

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): self
    {
        $this->country = $country;

        return $this;
    }
}
