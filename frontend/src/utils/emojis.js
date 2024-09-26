export const funEmojis = [
	// Fun Emojis
	"💥", // Explosion
	"✨", // Sparkles
	"🔥", // Fire
	"💫", // Dizzy
	"🌈", // Rainbow
	"🎆", // Fireworks
	"⚡", // Lightning
	"🌟", // Glowing Star
	"🎇", // Sparkler
	"🦄", // Unicorn
	"🐉", // Dragon
	"🚀", // Rocket
	"🌍", // Earth Globe
	"🛸", // UFO
	"🤖", // Robot
	"👑", // Crown
	"🦸", // Superhero
	"🦸‍♀️", // Female Superhero
	"⚔️", // Crossed Swords
	"🧙", // Wizard
	"🧛", // Vampire
	"🎭", // Performing Arts
	"🎩", // Top Hat
	"🎨", // Artist Palette
	"🕶️", // Sunglasses
	"💡", // Light Bulb
	"🔮", // Crystal Ball
	"🧩", // Puzzle Piece
	"🎯", // Direct Hit
	"🏅", // Sports Medal
	"🎮", // Video Game
	"🎸", // Guitar
	"🎧", // Headphones
	"🎤", // Microphone
	"🎺", // Trumpet
	"🥳", // Party Face
	"🤹", // Juggling
	"🛼", // Roller Skate
	"🌌", // Milky Way
	"🌋", // Volcano
	"🏖️", // Beach
	"🍕", // Pizza
	"🍦", // Ice Cream
	"🍩", // Donut
	"🎉", // Party Popper
	"🧁", // Cupcake
	"🍫", // Chocolate
	"🎈", // Balloon

	// Activity Emojis
	"⚽", // Soccer
	"🏀", // Basketball
	"🏈", // American Football
	"⚾", // Baseball
	"🎾", // Tennis
	"🏐", // Volleyball
	"🏓", // Table Tennis
	"🏸", // Badminton
	"⛳", // Golf
	"🏒", // Hockey
	"🥋", // Martial Arts
	"🥊", // Boxing Gloves
	"🚴‍♂️", // Cycling
	"🏄‍♀️", // Surfing
	"🏊‍♂️", // Swimming
	"🧗‍♀️", // Climbing
	"⛹️‍♂️", // Basketball Player
	"🏇", // Horse Racing
	"🤸‍♂️", // Cartwheel
	"🤼‍♀️", // Wrestling
	"🤾‍♂️", // Handball
	"🧘‍♂️", // Meditation
	"🏋️‍♀️", // Weightlifting
	"🚣‍♂️", // Rowing
	"🛶", // Canoeing
	"🚵‍♀️", // Mountain Biking
	"🧗‍♂️", // Climbing
	"🛹", // Skateboarding
	"🎣", // Fishing
	"🎿", // Skiing
	"🏂", // Snowboarding
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};