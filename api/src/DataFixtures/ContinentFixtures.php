<?php

namespace App\DataFixtures;

use App\Entity\Continent;
use Doctrine\Common\Persistence\ObjectManager;

class ContinentFixtures extends BaseFixture
{

    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/continents-info.json'),true);

        $this->createMany(Continent::class, count($json_a), $json_a, function(Continent $continent, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $continent
                ->setName($json_elem['entity'])
                ->setPollution($json_elem['value']);
        });

        $manager->flush();
    }
}
