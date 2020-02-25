<?php

namespace App\DataFixtures;

use App\Entity\Ocean;
use Doctrine\Common\Persistence\ObjectManager;

class OceanFixtures extends BaseFixture
{

    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/oceans.json'),true);

        $this->createMany(Ocean::class, count($json_a), $json_a, function(Ocean $ocean, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $ocean
                ->setName($json_elem['entity'])
                ->setPollution($json_elem['prod'])
                ->setPercent($json_elem['percent']);
        });

        $manager->flush();
    }
}
