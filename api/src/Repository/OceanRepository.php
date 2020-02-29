<?php

namespace App\Repository;

use App\Entity\Ocean;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Ocean|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ocean|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ocean[]    findAll()
 * @method Ocean[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OceanRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ocean::class);
    }
}
