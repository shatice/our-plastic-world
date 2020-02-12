<?php

namespace App\Controller;

use App\Entity\GlobalManage;
use App\Repository\GlobalManageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GlobalManageController extends AbstractController
{
    /**
     * @Route("/global/manage", name="global_manage")
     */
    public function index(GlobalManageRepository $repo)
    {
        $results = $repo->findAll();
        return $this->json($results);
    }

    /**
     * @Route("/global/manage/{year}", name="global_manage_by_year")
     */
    public function findByYear(GlobalManage $manage = null)
    {
        if ($manage)
        {
            return $this->json($manage);
        }
        else
        {
            return $this->json(["error" => "No data"]);
        }

    }
}
