<?php
namespace App\DataFixtures;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

abstract class BaseFixture extends Fixture
{
    /** @var ObjectManager */
    private $manager;

    /** @var Generator */
    protected $faker;
    private $index = 0;

    abstract protected function loadData(ObjectManager $manager);

    public function load(ObjectManager $manager)
    {
        $this->manager = $manager;
        $this->loadData($manager);
    }


    protected function createMany(string $className, int $count, ?array $json, callable $factory)
    {
        for ($i = 0; $i < $count; $i++) {
            $this->index = $i;
            $entity = new $className();
            $factory($entity, $json, $i);
            $this->manager->persist($entity);
            // store for usage later as App\Entity\ClassName_#COUNT#
            $this->addReference($className . '_' . $i, $entity);
        }
    }

    protected function getIndex() {
        return $this->index;
    }
}