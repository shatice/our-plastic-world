<?php

namespace App\Controller;

use App\Entity\GlobalInfos;
use App\Repository\GlobalInfosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GlobalInfosController extends AbstractController
{
    /**
     * @Route("/global", name="global_infos")
     * * @ApiDoc(
     *     resource=true,
     *     resourceDescription="Operations on users.",
     *     description="Retrieve list of users."
     * )
     */
    public function index(GlobalInfosRepository $repo)
    {
        $result = $repo->findAll();
        return $this->json($result);
    }

    /**
     * @Route("/global/years", name="global_years")
     */
    public function getYears(GlobalInfosRepository $repo)
    {
        $result = $repo->getYears();
        return $this->json($result);
    }

    /**
     * @Route("/global/{year}", name="global")
     */
    public function getInfos(GlobalInfos $global = null)
    {
        if ($global)
        {
            return $this->json($global);
        }
        else
        {
            return $this->json(["error" => "No data"]);
        }
    }
}
