import type { Item } from './Types';

const path = '/src/assets/items'

export const items: Item[] = [
    {
        id: 10000,
        name: 'null',
        level: -1,
        tooltip: 'none',
        icon: '',
        rarity: 'undefined',
        category: 'null',
        maxQuantity: -1
    },{
        id: 10001,
        name: 'items.wood_ore',
        level: 0,
        tooltip: 'items.wood_ore_tooltip',
        icon: `${path}/wood_ore.png`,
        rarity: 'rarity.common',
        category: '',
        maxQuantity: -2
    },{
        id: 10002,
        name: 'items.lifewood_ore',
        level: 1,
        tooltip: 'items.lifewood_ore_tooltip',
        icon: `${path}/lifewood_ore.png`,
        rarity: 'rarity.uncommon',
        category: '',
        maxQuantity: -1
    },{
        id: 11051,
        name: 'items.stone_ore',
        level:1,
        tooltip:'items.stone_ore_tooltip',
        icon: `${path}/stone_ore.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 11052,
        name: 'items.icestone_ore',
        level: 1,
        tooltip: 'items.icestone_ore_tooltip',
        icon: `${path}/icestone_ore.png`,
        rarity: 'rarity.uncommon',
        category: '',
        maxQuantity: -1
    },{
        id: 10053,
        name: 'items.granite_ore',
        level: 2,
        tooltip: 'items.granite_ore_tooltip',
        icon: `${path}/granite_ore.png`,
        rarity: 'rarity.common',
        category: '',
        maxQuantity: -1
    },{
        id: 10054,
        name: 'items.shale_ore',
        level: 2,
        tooltip:'items.shale_ore_tooltip',
        icon: `${path}/shale_ore.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 10055,
        name: 'items.copper_ore',
        level: 3,
        tooltip:'items.copper_ore_tooltip',
        icon: `${path}/copper_ore.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },{
        id: 10056,
        name: 'items.iron_ore',
        level: 4,
        tooltip:'items.iron_ore_tooltip',
        icon: `${path}/iron_ore.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },{
        id: 20101,
        name: 'items.plank',
        level: 0,
        tooltip:'items.plank_tooltip',
        icon:`${path}/plank.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 20102,
        name: 'items.lifewood_ingot',
        level: 1,
        tooltip:'items.lifewood_ingot_tooltip',
        icon: `${path}/lifewood_ingot.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },{
        id: 20103,
        name: 'items.stone_ingot',
        level: 1,
        tooltip:'items.stone_ingot_tooltip',
        icon: `${path}/stone_ingot.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 20104,
        name: 'items.icestone_ingot',
        level: 1,
        tooltip:'items.icestone_ingot_tooltip',
        icon: `${path}/icestone_ingot.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },{
        id: 20105,
        name: 'items.granite_ingot',
        level: 2,
        tooltip:'items.granite_ingot_tooltip',
        icon: `${path}/granite_ingot.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 20106,
        name: 'items.shale_ingot',
        level: 2,
        tooltip:'items.shale_ingot_tooltip',
        icon: `${path}/shale_ingot.png`,
        rarity:'rarity.common',
        category:'',
        maxQuantity:-1
    },{
        id: 20107,
        name: 'items.copper_ingot',
        level: 3,
        tooltip:'items.copper_ingot_tooltip',
        icon: `${path}/copper_ingot.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },{
        id: 20108,
        name: 'items.iron_ingot',
        level: 4,
        tooltip:'items.iron_ingot_tooltip',
        icon: `${path}/iron_ingot.png`,
        rarity:'rarity.uncommon',
        category:'',
        maxQuantity:-1
    },

]

export default items;