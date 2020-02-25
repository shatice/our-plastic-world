<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\GlobalInfosRepository")
 */
class GlobalInfos
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
     * @ORM\Column(type="float")
     */
    private $discarded;

    /**
     * @ORM\Column(type="float")
     */
    private $incinerated;

    /**
     * @ORM\Column(type="float")
     */
    private $recycled;

    /**
     * @ORM\Column(type="bigint")
     */
    private $total_production;

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

    public function getDiscarded(): ?float
    {
        return $this->discarded;
    }

    public function setDiscarded(float $discarded): self
    {
        $this->discarded = $discarded;

        return $this;
    }

    public function getIncinerated(): ?float
    {
        return $this->incinerated;
    }

    public function setIncinerated(float $incinerated): self
    {
        $this->incinerated = $incinerated;

        return $this;
    }

    public function getRecycled(): ?float
    {
        return $this->recycled;
    }

    public function setRecycled(float $recycled): self
    {
        $this->recycled = $recycled;

        return $this;
    }

    public function getTotalProduction(): ?string
    {
        return $this->total_production;
    }

    public function setTotalProduction(string $total_production): self
    {
        $this->total_production = $total_production;

        return $this;
    }
}
