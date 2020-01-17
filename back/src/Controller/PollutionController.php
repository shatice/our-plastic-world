<?php

namespace App\Controller;

use App\Entity\Country;
use App\Entity\Pollution;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PollutionController extends AbstractController
{
    /**
     * @Route("/pollution", name="pollution")
     */
    public function index()
    {
        return $this->json(['root'=>'pollution']);
    }

    /**
     * @Route("/pollution/{code}/{year}", name="pollutionByYear")
     */
    public function pollutionByCountryByYear(Country $country = null, Pollution $pollution = null)
    {
        if ($country !== null && $pollution !== null)
        {
            $list[] = array(
                'country' => $country->getEntity(),
                'code' => $country->getCode(),
                'year'=> $pollution->getYear(),
                'pollution(tonne)' => intval($pollution->getWaste())
            );
            return $this->json($list);
        } else
        {
            return $this->json(['Error'=>'No data']);
        }

    }
}
