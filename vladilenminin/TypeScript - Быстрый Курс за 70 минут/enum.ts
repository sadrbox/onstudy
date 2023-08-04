//Enum

enum Membership {
	Simple = 0,
	Standard = 1,
	Premium = 2,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
// console.log(membership);
// console.log(membershipReverse);
// console.log(Membership.Simple);

enum SocialMedia {
	VK = "VK",
	FACEBOOK = "FACEBOOK",
	INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
// console.log(social);
