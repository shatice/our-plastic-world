<?php

namespace App\Controller;

use App\Entity\Continent;
use App\Repository\ContinentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContinentController extends AbstractController
{
    /**
     * @Route("/continent", name="continent")
     */
    public function index(ContinentRepository $repo)
    {
        $result = $repo->findContinents();
        return $this->json($result);
    }

    /**
     * @Route("/continent/{id}", name="continent_countries")
     */
    public function getCountries(Continent $continent = null)
    {
        if ($continent)
        {
            $result = $continent->getCountries();
            $arr = [];
            foreach ($result as $key=>$value)
            {
                $obj = [
                    "id" => $value->getId(),
                    "name" => $value->getName(),
                    "code" => $value->getCode(),
                    "tonne_per_year" => $value->getTonnePerYear(),
                    "per_person_per_day" => $value->getPerPersonPerDay(),
                    "continent" => $continent->getName()
                ];
                $arr[] = $obj;
            }
            return $this->json($arr);
        }
        else
        {
            return $this->json(["error" => "No data"]);
        }
    }
}
