<?php

namespace App\Controller;

use App\Entity\Country;
use App\Repository\CountryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CountryController extends AbstractController
{
    /**
     * @Route("/country", name="countries")
     */
    public function index(CountryRepository $countryRepo)
    {
        $results = $countryRepo->findAll();

        $list = array();

        foreach ($results as $result) {
            $list[] = array(
                'country' => $result->getEntity(),
                'code' => $result->getCode(),
                'population' => intval($result->getPopulation())
            );
        }
        return $this->json(["countries" => $list]);
    }

    /**
     * @Route("/country/{code}", name="country")
     */
    public function countryPage(Country $country)
    {
        $list[] = array(
            'country' => $country->getEntity(),
            'code' => $country->getCode(),
            'population' => intval($country->getPopulation())
        );
        return $this->json($list);
    }
}