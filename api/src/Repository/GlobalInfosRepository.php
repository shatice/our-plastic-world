<?php

namespace App\Repository;

use App\Entity\GlobalInfos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GlobalInfos|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalInfos|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalInfos[]    findAll()
 * @method GlobalInfos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalInfosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalInfos::class);
    }

     /**
      * @return GlobalInfos[] Returns an array of GlobalInfos years
      */

    public function getYears()
    {
        return $this->createQueryBuilder('g')
            ->select('g.year')
            ->orderBy('g.year', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
}
