<?php

namespace App\Repository;

use App\Entity\GlobalManage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GlobalManage|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalManage|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalManage[]    findAll()
 * @method GlobalManage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalManageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalManage::class);
    }

    // /**
    //  * @return GlobalManage[] Returns an array of GlobalManage objects
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
    public function findOneBySomeField($value): ?GlobalManage
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
