export const aggregation = (baseClass, ...mixins) => {
  const base = class _Combined extends baseClass {
    constructor(...args) {
      super(...args);
      mixins.forEach(mixin => {
        mixin.prototype.initializer.call(this);
      });
    }
  };
  const copyProps = (target, source) => {
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach(prop => {
        if (
          prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
          )
        )
          return;
        Object.defineProperty(
          target,
          prop,
          Object.getOwnPropertyDescriptor(source, prop)
        );
      });
  };
  mixins.forEach(mixin => {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

export const fake = 'fake';

export const nothingFunction = (...args) => args;
