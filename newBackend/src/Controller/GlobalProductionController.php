<?php

namespace App\Controller;

use App\Entity\GlobalProduction;
use App\Repository\GlobalProductionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GlobalProductionController extends AbstractController
{
    /**
     * @Route("/global/production", name="global_production")
     */
    public function index(GlobalProductionRepository $repo)
    {
        $results = $repo->findAll();
        return $this->json($results);
    }

    /**
     * @Route("/global/production/{year}", name="global_production_by_year")
     */
    public function findByYear(GlobalProduction $production = null)
    {
        if ($production)
        {
            return $this->json($production);
        }
        else
            {
                return $this->json(["error" => "No data"]);
            }

    }
}
