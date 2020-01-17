<?php

namespace App\DataFixtures;

use App\Entity\Country;
use App\Entity\Pollution;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PollutionFixtures extends BaseFixture implements DependentFixtureInterface
{
    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/pollution_2010.json'),true);

        $this->createMany(Pollution::class, count($json_a), $json_a, function(Pollution $pollution, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $pollution
                ->setYear($json_elem['year'])
                ->setWaste($json_elem['waste'])
                ->setCountry($this->getReference(Country::class . '_' . $this->getIndex()));
        });

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CountryFixtures::class
        ];
    }

}
