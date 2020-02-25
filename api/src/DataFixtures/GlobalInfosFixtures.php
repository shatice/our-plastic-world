<?php

namespace App\DataFixtures;

use App\Entity\GlobalInfos;
use Doctrine\Common\Persistence\ObjectManager;

class GlobalInfosFixtures extends BaseFixture
{

    public function loadData(ObjectManager $manager)
    {
        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/global-infos.json'),true);

        $this->createMany(GlobalInfos::class, count($json_a), $json_a, function(GlobalInfos $global, array $json_a) {
            $json_elem = $json_a[$this->getIndex()];
            $global
                ->setYear($json_elem['year'])
                ->setDiscarded($json_elem['discarded'])
                ->setRecycled($json_elem['recycled'])
                ->setIncinerated($json_elem['incinerated'])
                ->setTotalProduction($json_elem['total_production']);
        });

        $manager->flush();
    }
}
