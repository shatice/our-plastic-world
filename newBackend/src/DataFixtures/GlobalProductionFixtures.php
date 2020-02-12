<?php

namespace App\DataFixtures;

use App\Entity\GlobalProduction;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class GlobalProductionFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/global-prod.json'),true);

        foreach ($json_a as $elem) {
            $prod = new GlobalProduction();
            $prod
                ->setYear($elem['year'])
                ->setProduction($elem['prod_tonne']);

            $manager->persist($prod);
        }

        $manager->flush();
    }
}
