<?php

namespace App\DataFixtures;

use App\Entity\GlobalManage;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class GlobalManageFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $json_a = json_decode(file_get_contents(__DIR__ . '/../../assets/json/global-manage-waste.json'),true);

        foreach ($json_a as $elem) {
            $prod = new GlobalManage();
            $prod
                ->setYear($elem['year'])
                ->setDiscarded($elem['discarded'])
                ->setIncinerated($elem['incinerated'])
                ->setRecycled($elem['recycled']);

            $manager->persist($prod);
        }

        $manager->flush();
    }
}
