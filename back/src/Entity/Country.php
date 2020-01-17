<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CountryRepository")
 */
class Country
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $entity;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="bigint")
     */
    private $population;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Pollution", mappedBy="country")
     */
    private $pollutions;

    public function __construct()
    {
        $this->pollutions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntity(): ?string
    {
        return $this->entity;
    }

    public function setEntity(string $entity): self
    {
        $this->entity = $entity;

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

    public function getPopulation(): ?string
    {
        return $this->population;
    }

    public function setPopulation(string $population): self
    {
        $this->population = $population;

        return $this;
    }

    /**
     * @return Collection|Pollution[]
     */
    public function getPollutions(): Collection
    {
        return $this->pollutions;
    }

    public function getPollutionByYear(int $year): ?Pollution
    {
        $arr = $this->pollutions->getValues();
        for ($i = 0; $i < count($arr); $i++) {
            if ($arr[$i]->getYear() === $year)
            {
                return $arr[$i];
            } else {
                return null;
            }
        }
    }

    public function addPollution(Pollution $pollution): self
    {
        if (!$this->pollutions->contains($pollution)) {
            $this->pollutions[] = $pollution;
            $pollution->setCountry($this);
        }

        return $this;
    }

    public function removePollution(Pollution $pollution): self
    {
        if ($this->pollutions->contains($pollution)) {
            $this->pollutions->removeElement($pollution);
            // set the owning side to null (unless already changed)
            if ($pollution->getCountry() === $this) {
                $pollution->setCountry(null);
            }
        }

        return $this;
    }
}
