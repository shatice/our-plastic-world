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
    public function index(CountryRepository $countryRepo)
    {
        $country = $countryRepo->findOneByCode("DZA");


        return $this->json(["squares" => $country->getCode()]);
        //$total = $country->getPollutionByYear(2010)->getWaste() * 1000;
        //$personne = $country->getPopulation() * 365;
        //dd($total / $personne );

        return $this->json($country);
    }
}