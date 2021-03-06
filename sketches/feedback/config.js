/** HEDRON TIP **
  The config.js defines how the sketch file is used by Hedron.
**/

module.exports = {
  // Default title when sketch is loaded in (can be changed by user)
  defaultTitle: 'feedback',
  // Params are values between 0 and 1 that can be manipulated by the user
  // these values are sent to the sketch every frame
  // e.g. Speed, scale, colour
  params: [
    {
      key: 'fade',
      defaultValue: .9,
      defaultMin: -1,
      defaultMax: 1
    },
    {
      key: 'xPos',
      defaultValue: .5,
      defaultMin: 0,
      defaultMax: 1
    },
    {
      key: 'yPos',
      defaultValue: .5,
      defaultMin: 0,
      defaultMax: 1
    },
    {
      key: 'hue',
      defaultValue: .5,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'saturation',
      defaultValue: .5,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'brightness',
      defaultValue: .5,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'xShift',
      title: "min distance shift",
      defaultValue: .5,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'yShift',
      title: "max distance shift",
      defaultValue: .5,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'anglePhase',
      defaultValue: 0,
      defaultMin: 0,
      defaultMax: 6.28318530718
    },
    {
      key: 'angleMin',
      defaultValue: .5,
      defaultMin: -.03,
      defaultMax: .03
    },
    {
      key: 'angleMax',
      defaultValue: .5,
      defaultMin: -.03,
      defaultMax: .03
    },
    {
      key: 'angleFreq',
      defaultValue: 0,
      defaultMin: 0,
      defaultMax: 100
    },
    {
      key: 'angleScale',
      title: 'mic angle mul',
      defaultValue: .5,
      defaultMin: 1,
      defaultMax: 16
    },
    {
      key: 'angleOffset',
      title: 'mic angle off',
      defaultValue: .5,
      defaultMin: 0,
      defaultMax: 1
    },
    {
      key: 'micSpread',
      defaultValue: .5,
      defaultMin: 0,
      defaultMax: .002
    },
    {
      key: 'spreadX',
      defaultValue: .25,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'spreadY',
      defaultValue: .25,
      defaultMin: -.1,
      defaultMax: .1
    },
    {
      key: 'postToggled',
      defaultValue: 0,
      hidden: true
    },
    {
      key: 'blend',
      defaultValue: 0,
      hidden: true
    },


  ],
  // Shots are single functions that can fire, as opposed to values that change
  // e.g. Explosions, Pre-defined animations
  shots: [
    {
      method: 'panic', // needs to be unique
      title: 'panic' // should be human
    },
    {
      method: 'togglePostSave', // needs to be unique
      title: 'togglePost' // should be human
    },
    {
      method: 'debug', // needs to be unique
      title: 'debug microphone' // should be human
    },
    {
      method: 'rgbSplit', // needs to be unique
      title: 'rgb split' // should be human
    },
    {
      method: 'keyBlack', // needs to be unique
      title: 'key black' // should be human
    },
    {
      method: 'blendLerp', // needs to be unique
      title: 'mode lerp' // should be human
    },
    {
      method: 'blendAdd', // needs to be unique
      title: 'mode add' // should be human
    },
    {
      method: 'blendScreen', // needs to be unique
      title: 'mode screen' // should be human
    },
    {
      method: 'blendDarken', // needs to be unique
      title: 'mode darken' // should be human
    },
    {
      method: 'blendMultiply', // needs to be unique
      title: 'mode multiply' // should be human
    },
    {
      method: 'blendBurn', // needs to be unique
      title: 'mode color burn' // should be human
    },
    {
      method: 'blendPin', // needs to be unique
      title: 'mode pin light' // should be human
    },
    {
      method: 'blendSaturation', // needs to be unique
      title: 'mode saturation' // should be human
    },
    {
      method: 'blendDivide', // needs to be unique
      title: 'mode divide' // should be human
    },
    {
      method: 'blendDifference', // needs to be unique
      title: 'mode difference' // should be human
    },
  ]
}
