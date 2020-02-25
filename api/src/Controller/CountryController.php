<?php

namespace App\Controller;

use App\Repository\CountryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CountryController extends AbstractController
{
    /**
     * @Route("/country", name="country")
     */
    public function index(CountryRepository $repo)
    {
        $result = $repo->findCountries();
        return $this->json($result);
    }
}
