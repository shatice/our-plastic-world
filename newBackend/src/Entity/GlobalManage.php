<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     itemOperations={"get"},
 *     normalizationContext={"groups"={"manage:read"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\GlobalManageRepository")
 */
class GlobalManage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @Groups({"manage:read"})
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"manage:read"})
     */
    private $year;

    /**
     * @ORM\Column(type="float")
     * @Groups({"manage:read"})
     */
    private $discarded;

    /**
     * @ORM\Column(type="float")
     * @Groups({"manage:read"})
     */
    private $incinerated;

    /**
     * @ORM\Column(type="float")
     * @Groups({"manage:read"})
     */
    private $recycled;

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
}
