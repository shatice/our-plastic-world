<?php

namespace App\Repository;

use App\Entity\GlobalProduction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GlobalProduction|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalProduction|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalProduction[]    findAll()
 * @method GlobalProduction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalProductionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalProduction::class);
    }

    // /**
    //  * @return GlobalProduction[] Returns an array of GlobalProduction objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GlobalProduction
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
