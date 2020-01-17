<?php

namespace App\DataFixtures;

use App\Entity\Country;
use Doctrine\Common\Persistence\ObjectManager;

class CountryFixtures extends BaseFixture
{

    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/country.json'),true);

        $this->createMany(Country::class, count($json_a), $json_a, function(Country $country, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $country
                ->setEntity($json_elem['entity'])
                ->setCode($json_elem['code'])
                ->setPopulation($json_elem['population']);
        });

        $manager->flush();
    }
}
