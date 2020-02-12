<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     itemOperations={"get"},
 *     normalizationContext={"groups"={"prod:read"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\GlobalProductionRepository")
 */
class GlobalProduction
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @Groups({"prod:read"})
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"prod:read"})
     */
    private $year;

    /**
     * @ORM\Column(type="bigint")
     * @Groups({"prod:read"})
     */
    private $production;

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

    public function getProduction(): ?string
    {
        return $this->production;
    }

    public function setProduction(string $production): self
    {
        $this->production = $production;

        return $this;
    }
}
