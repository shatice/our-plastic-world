<?php

namespace App\Controller;

use App\Repository\OceanRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class OceanController extends AbstractController
{
    /**
     * @Route("/ocean", name="ocean")
     */
    public function index(OceanRepository $repo)
    {
        $result = $repo->findAll();
        return $this->json($result);
    }
}
