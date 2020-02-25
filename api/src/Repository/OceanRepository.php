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

    // /**
    //  * @return Ocean[] Returns an array of Ocean objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Ocean
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
