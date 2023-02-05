
import Character from "../character";
import Team from "../team";

test ("create team", () => {
    const destroyers = new Team();
    expect(destroyers["members"].size).toEqual(0)
});

test ("add a member", () => {
    const destroyers = new Team();
    const easyRave = new Character("easyRave", "human", 30)
    destroyers.add(easyRave)
    expect(destroyers["members"].has(easyRave)).toBe(true)
});

test ("add character which already exist", () => {
    const destroyers = new Team();
    const easyRave = new Character("easyRave", "human", 30)
    const quickRage = new Character("quickRage", "amphibian", 41)
    destroyers.add(easyRave)
    destroyers.add(quickRage)
    expect(() => destroyers.add(easyRave)).toThrow("this character already exist in team")
});

test ("add All characters or some amount", () => {
    const destroyers = new Team();
    const easyRave = new Character("easyRave", "human", 30);
    const quickRage = new Character("quickRage", "amphibian", 41);
    const Amarelle = new Character("Amarelle", "amphibian", 100);
    const Shuga72 = new Character("Shuga72", "werewolf", 70);
    const SoulMaker = new Character("SoulMaker", "human", 77);
    destroyers.addAll(easyRave, quickRage, Amarelle, SoulMaker, Shuga72);
    expect(destroyers["members"].size).toEqual(5);
});

test ("to array", () => {
    const destroyers = new Team();
    const easyRave = new Character("easyRave", "human", 30);
    const quickRage = new Character("quickRage", "amphibian", 41);
    const Amarelle = new Character("Amarelle", "amphibian", 100);
    destroyers.addAll(Amarelle, quickRage, easyRave);
    destroyers.toArray();
    expect(destroyers["members"]).toEqual([
        {name: "Amarelle", race: "amphibian", level: 100},
        {name: "quickRage", race: "amphibian", level: 41},
        {name: "easyRave", race: "human", level: 30}
    ])
});