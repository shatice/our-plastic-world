<?php

namespace App\DataFixtures;

use App\Entity\Continent;
use App\Entity\Country;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CountryFixtures extends BaseFixture implements DependentFixtureInterface
{
    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/countries-infos.json'),true);

        $this->createMany(Country::class, count($json_a), $json_a, function(Country $country, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $country
                ->setName($json_elem['entity'])
                ->setCode($json_elem['code'])
                ->setTonnePerYear($json_elem['tonne_per_year'])
                ->setPerPersonPerDay($json_elem['per_person_per_day'])
                ->setValue($json_elem['value'])
                ->setContinent($this->getReference(Continent::class . '_' . str_replace(' ','',$json_elem['continent'])));
        });

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ContinentFixtures::class
        ];
    }

}
