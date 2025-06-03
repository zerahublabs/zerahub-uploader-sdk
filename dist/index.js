var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports, module) => {
  (function() {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object")
        return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return typeof maybeIterable === "function" ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(oldElement.type, newKey, undefined, undefined, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
      oldElement._store && (newKey._store.validated = oldElement._store.validated);
      return newKey;
    }
    function isValidElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    function getElementKey(element, index) {
      return typeof element === "object" && element !== null && element.key != null ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (typeof thenable.status === "string" ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
            thenable.status === "pending" && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
          }, function(error) {
            thenable.status === "pending" && (thenable.status = "rejected", thenable.reason = error);
          })), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === "undefined" || type === "boolean")
        children = null;
      var invokeCallback = false;
      if (children === null)
        invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey = nameSoFar === "" ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback) ? (escapedPrefix = "", childKey != null && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : callback != null && (isValidElement(callback) && (callback.key != null && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (callback.key == null || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), nameSoFar !== "" && invokeCallback != null && isValidElement(invokeCallback) && invokeCallback.key == null && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = nameSoFar === "" ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0;i < children.length; i++)
          nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (i = getIteratorFn(children), typeof i === "function")
        for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = true), children = i.call(children), i = 0;!(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
      else if (type === "object") {
        if (typeof children.then === "function")
          return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + (array === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (children == null)
        return children;
      var result = [], count = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (payload._status === -1) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 1, payload._result = moduleObject;
        }, function(error) {
          if (payload._status === 0 || payload._status === -1)
            payload._status = 2, payload._result = error;
        });
        payload._status === -1 && (payload._status = 0, payload._result = ctor);
      }
      if (payload._status === 1)
        return ctor = payload._result, ctor === undefined && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ctor), "default" in ctor || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ctor), ctor.default;
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      dispatcher === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (enqueueTaskImpl === null)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function(callback) {
            didWarnAboutMessageChannel === false && (didWarnAboutMessageChannel = true, typeof MessageChannel === "undefined" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var channel = new MessageChannel;
            channel.port1.onmessage = callback;
            channel.port2.postMessage(undefined);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && typeof AggregateError === "function" ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (queue !== null)
        if (queue.length !== 0)
          try {
            flushActQueue(queue);
            enqueueTask(function() {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else
          ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = true;
        var i = 0;
        try {
          for (;i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = false;
              var continuation = callback(false);
              if (continuation !== null) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else
                break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function(publicInstance) {
        warnNoop(publicInstance, "forceUpdate");
      },
      enqueueReplaceState: function(publicInstance) {
        warnNoop(publicInstance, "replaceState");
      },
      enqueueSetState: function(publicInstance) {
        warnNoop(publicInstance, "setState");
      }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
      ]
    }, fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy;
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null,
      actQueue: null,
      isBatchingLegacy: false,
      didScheduleLegacyUpdate: false,
      didUsePromise: false,
      thrownErrors: [],
      getCurrentStack: null,
      recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    deprecatedAPIs = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = typeof reportError === "function" ? reportError : function(error) {
      if (typeof window === "object" && typeof window.ErrorEvent === "function") {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event))
          return;
      } else if (typeof process === "object" && typeof process.emit === "function") {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = typeof queueMicrotask === "function" ? function(callback) {
      queueMicrotask(function() {
        return queueMicrotask(callback);
      });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
      __proto__: null,
      c: function(size) {
        return resolveDispatcher().useMemoCache(size);
      }
    });
    exports.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
      var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = ReactSharedInternals.actQueue = prevActQueue !== null ? prevActQueue : [], didAwaitActCall = false;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      if (result !== null && typeof result === "object" && typeof result.then === "function") {
        var thenable = result;
        queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        });
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            thenable.then(function(returnValue) {
              popActScope(prevActQueue, prevActScopeDepth);
              if (prevActScopeDepth === 0) {
                try {
                  flushActQueue(queue), enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  });
                } catch (error$0) {
                  ReactSharedInternals.thrownErrors.push(error$0);
                }
                if (0 < ReactSharedInternals.thrownErrors.length) {
                  var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                  ReactSharedInternals.thrownErrors.length = 0;
                  reject(_thrownError);
                }
              } else
                resolve(returnValue);
            }, function(error) {
              popActScope(prevActQueue, prevActScopeDepth);
              0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
            });
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      prevActScopeDepth === 0 && (flushActQueue(queue), queue.length !== 0 && queueSeveralMicrotasks(function() {
        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), ReactSharedInternals.actQueue = null);
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
      return {
        then: function(resolve, reject) {
          didAwaitActCall = true;
          prevActScopeDepth === 0 ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
            return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
          })) : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.captureOwnerStack = function() {
      var getCurrentStack = ReactSharedInternals.getCurrentStack;
      return getCurrentStack === null ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
      if (element === null || element === undefined)
        throw Error("The argument must be a React element, but you passed " + element + ".");
      var props = assign({}, element.props), key = element.key, owner = element._owner;
      if (config != null) {
        var JSCompiler_inline_result;
        a: {
          if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
            JSCompiler_inline_result = false;
            break a;
          }
          JSCompiler_inline_result = config.ref !== undefined;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
        for (propName in config)
          !hasOwnProperty.call(config, propName) || propName === "key" || propName === "__self" || propName === "__source" || propName === "ref" && config.ref === undefined || (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (propName === 1)
        props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0;i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, undefined, undefined, owner, props, element._debugStack, element._debugTask);
      for (key = 2;key < arguments.length; key++)
        owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
      return props;
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function(type, config, children) {
      for (var i = 2;i < arguments.length; i++) {
        var node = arguments[i];
        isValidElement(node) && node._store && (node._store.validated = 1);
      }
      i = {};
      node = null;
      if (config != null)
        for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)
          hasOwnProperty.call(config, propName) && propName !== "key" && propName !== "__self" && propName !== "__source" && (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1)
        i.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), _i = 0;_i < childrenLength; _i++)
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          i[propName] === undefined && (i[propName] = childrenLength[propName]);
      node && defineKeyPropWarningGetter(i, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return ReactElement(type, node, undefined, undefined, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function(render) {
      render != null && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render !== "function" ? console.error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
      render != null && render.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      type == null && console.error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: compare === undefined ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: false,
        configurable: true,
        get: function() {
          return ownName;
        },
        set: function(name) {
          ownName = name;
          type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
        }
      });
      return compare;
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        onStartTransitionFinish !== null && onStartTransitionFinish(currentTransition, returnValue);
        typeof returnValue === "object" && returnValue !== null && typeof returnValue.then === "function" && returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        prevTransition === null && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
      create == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      var dispatcher = resolveDispatcher();
      if (typeof update === "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
      create == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
      create == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  var react_development = __toESM(require_react_development(), 1);
  if (false) {} else {
    module.exports = react_development;
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS((exports) => {
  var React = __toESM(require_react(), 1);
  (function() {
    function getComponentNameFromType(type) {
      if (type == null)
        return null;
      if (typeof type === "function")
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if (typeof type === "string")
        return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if (typeof type === "object")
        switch (typeof type.tag === "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = type !== "" ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, innerType !== null ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE)
        return "<>";
      if (typeof type === "object" && type !== null && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return dispatcher === null ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning)
          return false;
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
      componentName = this.props.ref;
      return componentName !== undefined ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      (self !== undefined ? self : null) !== null ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
      var children = config.children;
      if (children !== undefined)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0;isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return k !== "key";
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      maybeKey !== undefined && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          propName !== "key" && (maybeKey[propName] = config[propName]);
      } else
        maybeKey = config;
      children && defineKeyPropWarningGetter(maybeKey, typeof type === "function" ? type.displayName || type.name || "Unknown" : type);
      return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
      typeof node === "object" && node !== null && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React = {
      "react-stack-bottom-frame": function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
  })();
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS((exports, module) => {
  var react_jsx_dev_runtime_development = __toESM(require_react_jsx_dev_runtime_development(), 1);
  if (false) {} else {
    module.exports = react_jsx_dev_runtime_development;
  }
});

// src/FileInput.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
// src/FileChunkerButton.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
// src/useFileChuncker.ts
var import_react = __toESM(require_react(), 1);

// node:buffer
var gr = Object.create;
var $ = Object.defineProperty;
var mr = Object.getOwnPropertyDescriptor;
var Ir = Object.getOwnPropertyNames;
var Fr = Object.getPrototypeOf;
var Ar = Object.prototype.hasOwnProperty;
var P = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
var Ur = (i, r) => {
  for (var t in r)
    $(i, t, { get: r[t], enumerable: true });
};
var D = (i, r, t, e) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let n of Ir(r))
      !Ar.call(i, n) && n !== t && $(i, n, { get: () => r[n], enumerable: !(e = mr(r, n)) || e.enumerable });
  return i;
};
var w = (i, r, t) => (D(i, r, "default"), t && D(t, r, "default"));
var O = (i, r, t) => (t = i != null ? gr(Fr(i)) : {}, D(r || !i || !i.__esModule ? $(t, "default", { value: i, enumerable: true }) : t, i));
var v = P((L) => {
  L.byteLength = Tr;
  L.toByteArray = _r;
  L.fromByteArray = Nr;
  var d = [], B = [], Rr = typeof Uint8Array < "u" ? Uint8Array : Array, G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (F = 0, Z = G.length;F < Z; ++F)
    d[F] = G[F], B[G.charCodeAt(F)] = F;
  var F, Z;
  B[45] = 62;
  B[95] = 63;
  function Q(i) {
    var r = i.length;
    if (r % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var t = i.indexOf("=");
    t === -1 && (t = r);
    var e = t === r ? 0 : 4 - t % 4;
    return [t, e];
  }
  function Tr(i) {
    var r = Q(i), t = r[0], e = r[1];
    return (t + e) * 3 / 4 - e;
  }
  function Cr(i, r, t) {
    return (r + t) * 3 / 4 - t;
  }
  function _r(i) {
    var r, t = Q(i), e = t[0], n = t[1], o = new Rr(Cr(i, e, n)), u = 0, f = n > 0 ? e - 4 : e, c;
    for (c = 0;c < f; c += 4)
      r = B[i.charCodeAt(c)] << 18 | B[i.charCodeAt(c + 1)] << 12 | B[i.charCodeAt(c + 2)] << 6 | B[i.charCodeAt(c + 3)], o[u++] = r >> 16 & 255, o[u++] = r >> 8 & 255, o[u++] = r & 255;
    return n === 2 && (r = B[i.charCodeAt(c)] << 2 | B[i.charCodeAt(c + 1)] >> 4, o[u++] = r & 255), n === 1 && (r = B[i.charCodeAt(c)] << 10 | B[i.charCodeAt(c + 1)] << 4 | B[i.charCodeAt(c + 2)] >> 2, o[u++] = r >> 8 & 255, o[u++] = r & 255), o;
  }
  function Sr(i) {
    return d[i >> 18 & 63] + d[i >> 12 & 63] + d[i >> 6 & 63] + d[i & 63];
  }
  function Lr(i, r, t) {
    for (var e, n = [], o = r;o < t; o += 3)
      e = (i[o] << 16 & 16711680) + (i[o + 1] << 8 & 65280) + (i[o + 2] & 255), n.push(Sr(e));
    return n.join("");
  }
  function Nr(i) {
    for (var r, t = i.length, e = t % 3, n = [], o = 16383, u = 0, f = t - e;u < f; u += o)
      n.push(Lr(i, u, u + o > f ? f : u + o));
    return e === 1 ? (r = i[t - 1], n.push(d[r >> 2] + d[r << 4 & 63] + "==")) : e === 2 && (r = (i[t - 2] << 8) + i[t - 1], n.push(d[r >> 10] + d[r >> 4 & 63] + d[r << 2 & 63] + "=")), n.join("");
  }
});
var rr = P((Y) => {
  Y.read = function(i, r, t, e, n) {
    var o, u, f = n * 8 - e - 1, c = (1 << f) - 1, l = c >> 1, s = -7, p = t ? n - 1 : 0, U = t ? -1 : 1, E = i[r + p];
    for (p += U, o = E & (1 << -s) - 1, E >>= -s, s += f;s > 0; o = o * 256 + i[r + p], p += U, s -= 8)
      ;
    for (u = o & (1 << -s) - 1, o >>= -s, s += e;s > 0; u = u * 256 + i[r + p], p += U, s -= 8)
      ;
    if (o === 0)
      o = 1 - l;
    else {
      if (o === c)
        return u ? NaN : (E ? -1 : 1) * (1 / 0);
      u = u + Math.pow(2, e), o = o - l;
    }
    return (E ? -1 : 1) * u * Math.pow(2, o - e);
  };
  Y.write = function(i, r, t, e, n, o) {
    var u, f, c, l = o * 8 - n - 1, s = (1 << l) - 1, p = s >> 1, U = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, E = e ? 0 : o - 1, k = e ? 1 : -1, dr = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, u = s) : (u = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -u)) < 1 && (u--, c *= 2), u + p >= 1 ? r += U / c : r += U * Math.pow(2, 1 - p), r * c >= 2 && (u++, c /= 2), u + p >= s ? (f = 0, u = s) : u + p >= 1 ? (f = (r * c - 1) * Math.pow(2, n), u = u + p) : (f = r * Math.pow(2, p - 1) * Math.pow(2, n), u = 0));n >= 8; i[t + E] = f & 255, E += k, f /= 256, n -= 8)
      ;
    for (u = u << n | f, l += n;l > 0; i[t + E] = u & 255, E += k, u /= 256, l -= 8)
      ;
    i[t + E - k] |= dr * 128;
  };
});
var b = P((_) => {
  var j = v(), T = rr(), tr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  _.Buffer = h;
  _.SlowBuffer = Pr;
  _.INSPECT_MAX_BYTES = 50;
  var N = 2147483647;
  _.kMaxLength = N;
  h.TYPED_ARRAY_SUPPORT = Mr();
  !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function Mr() {
    try {
      let i = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(h.prototype, "parent", { enumerable: true, get: function() {
    if (!!h.isBuffer(this))
      return this.buffer;
  } });
  Object.defineProperty(h.prototype, "offset", { enumerable: true, get: function() {
    if (!!h.isBuffer(this))
      return this.byteOffset;
  } });
  function m(i) {
    if (i > N)
      throw new RangeError('The value "' + i + '" is invalid for option "size"');
    let r = new Uint8Array(i);
    return Object.setPrototypeOf(r, h.prototype), r;
  }
  function h(i, r, t) {
    if (typeof i == "number") {
      if (typeof r == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return X(i);
    }
    return or(i, r, t);
  }
  h.poolSize = 8192;
  function or(i, r, t) {
    if (typeof i == "string")
      return kr(i, r);
    if (ArrayBuffer.isView(i))
      return Dr(i);
    if (i == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
    if (g(i, ArrayBuffer) || i && g(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (g(i, SharedArrayBuffer) || i && g(i.buffer, SharedArrayBuffer)))
      return W(i, r, t);
    if (typeof i == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let e = i.valueOf && i.valueOf();
    if (e != null && e !== i)
      return h.from(e, r, t);
    let n = $r(i);
    if (n)
      return n;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
      return h.from(i[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
  }
  h.from = function(i, r, t) {
    return or(i, r, t);
  };
  Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(h, Uint8Array);
  function ur(i) {
    if (typeof i != "number")
      throw new TypeError('"size" argument must be of type number');
    if (i < 0)
      throw new RangeError('The value "' + i + '" is invalid for option "size"');
  }
  function br(i, r, t) {
    return ur(i), i <= 0 ? m(i) : r !== undefined ? typeof t == "string" ? m(i).fill(r, t) : m(i).fill(r) : m(i);
  }
  h.alloc = function(i, r, t) {
    return br(i, r, t);
  };
  function X(i) {
    return ur(i), m(i < 0 ? 0 : V(i) | 0);
  }
  h.allocUnsafe = function(i) {
    return X(i);
  };
  h.allocUnsafeSlow = function(i) {
    return X(i);
  };
  function kr(i, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !h.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    let t = hr(i, r) | 0, e = m(t), n = e.write(i, r);
    return n !== t && (e = e.slice(0, n)), e;
  }
  function q(i) {
    let r = i.length < 0 ? 0 : V(i.length) | 0, t = m(r);
    for (let e = 0;e < r; e += 1)
      t[e] = i[e] & 255;
    return t;
  }
  function Dr(i) {
    if (g(i, Uint8Array)) {
      let r = new Uint8Array(i);
      return W(r.buffer, r.byteOffset, r.byteLength);
    }
    return q(i);
  }
  function W(i, r, t) {
    if (r < 0 || i.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (i.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let e;
    return r === undefined && t === undefined ? e = new Uint8Array(i) : t === undefined ? e = new Uint8Array(i, r) : e = new Uint8Array(i, r, t), Object.setPrototypeOf(e, h.prototype), e;
  }
  function $r(i) {
    if (h.isBuffer(i)) {
      let r = V(i.length) | 0, t = m(r);
      return t.length === 0 || i.copy(t, 0, 0, r), t;
    }
    if (i.length !== undefined)
      return typeof i.length != "number" || J(i.length) ? m(0) : q(i);
    if (i.type === "Buffer" && Array.isArray(i.data))
      return q(i.data);
  }
  function V(i) {
    if (i >= N)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + N.toString(16) + " bytes");
    return i | 0;
  }
  function Pr(i) {
    return +i != i && (i = 0), h.alloc(+i);
  }
  h.isBuffer = function(r) {
    return r != null && r._isBuffer === true && r !== h.prototype;
  };
  h.compare = function(r, t) {
    if (g(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), g(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(r) || !h.isBuffer(t))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === t)
      return 0;
    let e = r.length, n = t.length;
    for (let o = 0, u = Math.min(e, n);o < u; ++o)
      if (r[o] !== t[o]) {
        e = r[o], n = t[o];
        break;
      }
    return e < n ? -1 : n < e ? 1 : 0;
  };
  h.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  h.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return h.alloc(0);
    let e;
    if (t === undefined)
      for (t = 0, e = 0;e < r.length; ++e)
        t += r[e].length;
    let n = h.allocUnsafe(t), o = 0;
    for (e = 0;e < r.length; ++e) {
      let u = r[e];
      if (g(u, Uint8Array))
        o + u.length > n.length ? (h.isBuffer(u) || (u = h.from(u)), u.copy(n, o)) : Uint8Array.prototype.set.call(n, u, o);
      else if (h.isBuffer(u))
        u.copy(n, o);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      o += u.length;
    }
    return n;
  };
  function hr(i, r) {
    if (h.isBuffer(i))
      return i.length;
    if (ArrayBuffer.isView(i) || g(i, ArrayBuffer))
      return i.byteLength;
    if (typeof i != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
    let t = i.length, e = arguments.length > 2 && arguments[2] === true;
    if (!e && t === 0)
      return 0;
    let n = false;
    for (;; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return H(i).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return xr(i).length;
        default:
          if (n)
            return e ? -1 : H(i).length;
          r = ("" + r).toLowerCase(), n = true;
      }
  }
  h.byteLength = hr;
  function Or(i, r, t) {
    let e = false;
    if ((r === undefined || r < 0) && (r = 0), r > this.length || ((t === undefined || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (i || (i = "utf8");; )
      switch (i) {
        case "hex":
          return Jr(this, r, t);
        case "utf8":
        case "utf-8":
          return cr(this, r, t);
        case "ascii":
          return Vr(this, r, t);
        case "latin1":
        case "binary":
          return zr(this, r, t);
        case "base64":
          return Hr(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Kr(this, r, t);
        default:
          if (e)
            throw new TypeError("Unknown encoding: " + i);
          i = (i + "").toLowerCase(), e = true;
      }
  }
  h.prototype._isBuffer = true;
  function A(i, r, t) {
    let e = i[r];
    i[r] = i[t], i[t] = e;
  }
  h.prototype.swap16 = function() {
    let r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0;t < r; t += 2)
      A(this, t, t + 1);
    return this;
  };
  h.prototype.swap32 = function() {
    let r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0;t < r; t += 4)
      A(this, t, t + 3), A(this, t + 1, t + 2);
    return this;
  };
  h.prototype.swap64 = function() {
    let r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0;t < r; t += 8)
      A(this, t, t + 7), A(this, t + 1, t + 6), A(this, t + 2, t + 5), A(this, t + 3, t + 4);
    return this;
  };
  h.prototype.toString = function() {
    let r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? cr(this, 0, r) : Or.apply(this, arguments);
  };
  h.prototype.toLocaleString = h.prototype.toString;
  h.prototype.equals = function(r) {
    if (!h.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? true : h.compare(this, r) === 0;
  };
  h.prototype.inspect = function() {
    let r = "", t = _.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  };
  tr && (h.prototype[tr] = h.prototype.inspect);
  h.prototype.compare = function(r, t, e, n, o) {
    if (g(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(r))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (t === undefined && (t = 0), e === undefined && (e = r ? r.length : 0), n === undefined && (n = 0), o === undefined && (o = this.length), t < 0 || e > r.length || n < 0 || o > this.length)
      throw new RangeError("out of range index");
    if (n >= o && t >= e)
      return 0;
    if (n >= o)
      return -1;
    if (t >= e)
      return 1;
    if (t >>>= 0, e >>>= 0, n >>>= 0, o >>>= 0, this === r)
      return 0;
    let u = o - n, f = e - t, c = Math.min(u, f), l = this.slice(n, o), s = r.slice(t, e);
    for (let p = 0;p < c; ++p)
      if (l[p] !== s[p]) {
        u = l[p], f = s[p];
        break;
      }
    return u < f ? -1 : f < u ? 1 : 0;
  };
  function fr(i, r, t, e, n) {
    if (i.length === 0)
      return -1;
    if (typeof t == "string" ? (e = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, J(t) && (t = n ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
      if (n)
        return -1;
      t = i.length - 1;
    } else if (t < 0)
      if (n)
        t = 0;
      else
        return -1;
    if (typeof r == "string" && (r = h.from(r, e)), h.isBuffer(r))
      return r.length === 0 ? -1 : ir(i, r, t, e, n);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : ir(i, [r], t, e, n);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ir(i, r, t, e, n) {
    let o = 1, u = i.length, f = r.length;
    if (e !== undefined && (e = String(e).toLowerCase(), e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le")) {
      if (i.length < 2 || r.length < 2)
        return -1;
      o = 2, u /= 2, f /= 2, t /= 2;
    }
    function c(s, p) {
      return o === 1 ? s[p] : s.readUInt16BE(p * o);
    }
    let l;
    if (n) {
      let s = -1;
      for (l = t;l < u; l++)
        if (c(i, l) === c(r, s === -1 ? 0 : l - s)) {
          if (s === -1 && (s = l), l - s + 1 === f)
            return s * o;
        } else
          s !== -1 && (l -= l - s), s = -1;
    } else
      for (t + f > u && (t = u - f), l = t;l >= 0; l--) {
        let s = true;
        for (let p = 0;p < f; p++)
          if (c(i, l + p) !== c(r, p)) {
            s = false;
            break;
          }
        if (s)
          return l;
      }
    return -1;
  }
  h.prototype.includes = function(r, t, e) {
    return this.indexOf(r, t, e) !== -1;
  };
  h.prototype.indexOf = function(r, t, e) {
    return fr(this, r, t, e, true);
  };
  h.prototype.lastIndexOf = function(r, t, e) {
    return fr(this, r, t, e, false);
  };
  function Gr(i, r, t, e) {
    t = Number(t) || 0;
    let n = i.length - t;
    e ? (e = Number(e), e > n && (e = n)) : e = n;
    let o = r.length;
    e > o / 2 && (e = o / 2);
    let u;
    for (u = 0;u < e; ++u) {
      let f = parseInt(r.substr(u * 2, 2), 16);
      if (J(f))
        return u;
      i[t + u] = f;
    }
    return u;
  }
  function Yr(i, r, t, e) {
    return M(H(r, i.length - t), i, t, e);
  }
  function jr(i, r, t, e) {
    return M(rt(r), i, t, e);
  }
  function qr(i, r, t, e) {
    return M(xr(r), i, t, e);
  }
  function Wr(i, r, t, e) {
    return M(tt(r, i.length - t), i, t, e);
  }
  h.prototype.write = function(r, t, e, n) {
    if (t === undefined)
      n = "utf8", e = this.length, t = 0;
    else if (e === undefined && typeof t == "string")
      n = t, e = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(e) ? (e = e >>> 0, n === undefined && (n = "utf8")) : (n = e, e = undefined);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let o = this.length - t;
    if ((e === undefined || e > o) && (e = o), r.length > 0 && (e < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let u = false;
    for (;; )
      switch (n) {
        case "hex":
          return Gr(this, r, t, e);
        case "utf8":
        case "utf-8":
          return Yr(this, r, t, e);
        case "ascii":
        case "latin1":
        case "binary":
          return jr(this, r, t, e);
        case "base64":
          return qr(this, r, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Wr(this, r, t, e);
        default:
          if (u)
            throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), u = true;
      }
  };
  h.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function Hr(i, r, t) {
    return r === 0 && t === i.length ? j.fromByteArray(i) : j.fromByteArray(i.slice(r, t));
  }
  function cr(i, r, t) {
    t = Math.min(i.length, t);
    let e = [], n = r;
    for (;n < t; ) {
      let o = i[n], u = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (n + f <= t) {
        let c, l, s, p;
        switch (f) {
          case 1:
            o < 128 && (u = o);
            break;
          case 2:
            c = i[n + 1], (c & 192) === 128 && (p = (o & 31) << 6 | c & 63, p > 127 && (u = p));
            break;
          case 3:
            c = i[n + 1], l = i[n + 2], (c & 192) === 128 && (l & 192) === 128 && (p = (o & 15) << 12 | (c & 63) << 6 | l & 63, p > 2047 && (p < 55296 || p > 57343) && (u = p));
            break;
          case 4:
            c = i[n + 1], l = i[n + 2], s = i[n + 3], (c & 192) === 128 && (l & 192) === 128 && (s & 192) === 128 && (p = (o & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | s & 63, p > 65535 && p < 1114112 && (u = p));
        }
      }
      u === null ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, e.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e.push(u), n += f;
    }
    return Xr(e);
  }
  var er = 4096;
  function Xr(i) {
    let r = i.length;
    if (r <= er)
      return String.fromCharCode.apply(String, i);
    let t = "", e = 0;
    for (;e < r; )
      t += String.fromCharCode.apply(String, i.slice(e, e += er));
    return t;
  }
  function Vr(i, r, t) {
    let e = "";
    t = Math.min(i.length, t);
    for (let n = r;n < t; ++n)
      e += String.fromCharCode(i[n] & 127);
    return e;
  }
  function zr(i, r, t) {
    let e = "";
    t = Math.min(i.length, t);
    for (let n = r;n < t; ++n)
      e += String.fromCharCode(i[n]);
    return e;
  }
  function Jr(i, r, t) {
    let e = i.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > e) && (t = e);
    let n = "";
    for (let o = r;o < t; ++o)
      n += it[i[o]];
    return n;
  }
  function Kr(i, r, t) {
    let e = i.slice(r, t), n = "";
    for (let o = 0;o < e.length - 1; o += 2)
      n += String.fromCharCode(e[o] + e[o + 1] * 256);
    return n;
  }
  h.prototype.slice = function(r, t) {
    let e = this.length;
    r = ~~r, t = t === undefined ? e : ~~t, r < 0 ? (r += e, r < 0 && (r = 0)) : r > e && (r = e), t < 0 ? (t += e, t < 0 && (t = 0)) : t > e && (t = e), t < r && (t = r);
    let n = this.subarray(r, t);
    return Object.setPrototypeOf(n, h.prototype), n;
  };
  function a(i, r, t) {
    if (i % 1 !== 0 || i < 0)
      throw new RangeError("offset is not uint");
    if (i + r > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(r, t, e) {
    r = r >>> 0, t = t >>> 0, e || a(r, t, this.length);
    let n = this[r], o = 1, u = 0;
    for (;++u < t && (o *= 256); )
      n += this[r + u] * o;
    return n;
  };
  h.prototype.readUintBE = h.prototype.readUIntBE = function(r, t, e) {
    r = r >>> 0, t = t >>> 0, e || a(r, t, this.length);
    let n = this[r + --t], o = 1;
    for (;t > 0 && (o *= 256); )
      n += this[r + --t] * o;
    return n;
  };
  h.prototype.readUint8 = h.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || a(r, 1, this.length), this[r];
  };
  h.prototype.readUint16LE = h.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || a(r, 2, this.length), this[r] | this[r + 1] << 8;
  };
  h.prototype.readUint16BE = h.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || a(r, 2, this.length), this[r] << 8 | this[r + 1];
  };
  h.prototype.readUint32LE = h.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  };
  h.prototype.readUint32BE = h.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  };
  h.prototype.readBigUInt64LE = I(function(r) {
    r = r >>> 0, C(r, "offset");
    let t = this[r], e = this[r + 7];
    (t === undefined || e === undefined) && S(r, this.length - 8);
    let n = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + e * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  h.prototype.readBigUInt64BE = I(function(r) {
    r = r >>> 0, C(r, "offset");
    let t = this[r], e = this[r + 7];
    (t === undefined || e === undefined) && S(r, this.length - 8);
    let n = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + e;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  h.prototype.readIntLE = function(r, t, e) {
    r = r >>> 0, t = t >>> 0, e || a(r, t, this.length);
    let n = this[r], o = 1, u = 0;
    for (;++u < t && (o *= 256); )
      n += this[r + u] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  h.prototype.readIntBE = function(r, t, e) {
    r = r >>> 0, t = t >>> 0, e || a(r, t, this.length);
    let n = t, o = 1, u = this[r + --n];
    for (;n > 0 && (o *= 256); )
      u += this[r + --n] * o;
    return o *= 128, u >= o && (u -= Math.pow(2, 8 * t)), u;
  };
  h.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || a(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  };
  h.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || a(r, 2, this.length);
    let e = this[r] | this[r + 1] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  h.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || a(r, 2, this.length);
    let e = this[r + 1] | this[r] << 8;
    return e & 32768 ? e | 4294901760 : e;
  };
  h.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  };
  h.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  };
  h.prototype.readBigInt64LE = I(function(r) {
    r = r >>> 0, C(r, "offset");
    let t = this[r], e = this[r + 7];
    (t === undefined || e === undefined) && S(r, this.length - 8);
    let n = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (e << 24);
    return (BigInt(n) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  });
  h.prototype.readBigInt64BE = I(function(r) {
    r = r >>> 0, C(r, "offset");
    let t = this[r], e = this[r + 7];
    (t === undefined || e === undefined) && S(r, this.length - 8);
    let n = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(n) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + e);
  });
  h.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), T.read(this, r, true, 23, 4);
  };
  h.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || a(r, 4, this.length), T.read(this, r, false, 23, 4);
  };
  h.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || a(r, 8, this.length), T.read(this, r, true, 52, 8);
  };
  h.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || a(r, 8, this.length), T.read(this, r, false, 52, 8);
  };
  function x(i, r, t, e, n, o) {
    if (!h.isBuffer(i))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > n || r < o)
      throw new RangeError('"value" argument is out of bounds');
    if (t + e > i.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(r, t, e, n) {
    if (r = +r, t = t >>> 0, e = e >>> 0, !n) {
      let f = Math.pow(2, 8 * e) - 1;
      x(this, r, t, e, f, 0);
    }
    let o = 1, u = 0;
    for (this[t] = r & 255;++u < e && (o *= 256); )
      this[t + u] = r / o & 255;
    return t + e;
  };
  h.prototype.writeUintBE = h.prototype.writeUIntBE = function(r, t, e, n) {
    if (r = +r, t = t >>> 0, e = e >>> 0, !n) {
      let f = Math.pow(2, 8 * e) - 1;
      x(this, r, t, e, f, 0);
    }
    let o = e - 1, u = 1;
    for (this[t + o] = r & 255;--o >= 0 && (u *= 256); )
      this[t + o] = r / u & 255;
    return t + e;
  };
  h.prototype.writeUint8 = h.prototype.writeUInt8 = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  };
  h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  };
  h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  };
  h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  };
  h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function pr(i, r, t, e, n) {
    wr(r, e, n, i, t, 7);
    let o = Number(r & BigInt(4294967295));
    i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o;
    let u = Number(r >> BigInt(32) & BigInt(4294967295));
    return i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, u = u >> 8, i[t++] = u, t;
  }
  function sr(i, r, t, e, n) {
    wr(r, e, n, i, t, 7);
    let o = Number(r & BigInt(4294967295));
    i[t + 7] = o, o = o >> 8, i[t + 6] = o, o = o >> 8, i[t + 5] = o, o = o >> 8, i[t + 4] = o;
    let u = Number(r >> BigInt(32) & BigInt(4294967295));
    return i[t + 3] = u, u = u >> 8, i[t + 2] = u, u = u >> 8, i[t + 1] = u, u = u >> 8, i[t] = u, t + 8;
  }
  h.prototype.writeBigUInt64LE = I(function(r, t = 0) {
    return pr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  h.prototype.writeBigUInt64BE = I(function(r, t = 0) {
    return sr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  h.prototype.writeIntLE = function(r, t, e, n) {
    if (r = +r, t = t >>> 0, !n) {
      let c = Math.pow(2, 8 * e - 1);
      x(this, r, t, e, c - 1, -c);
    }
    let o = 0, u = 1, f = 0;
    for (this[t] = r & 255;++o < e && (u *= 256); )
      r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
    return t + e;
  };
  h.prototype.writeIntBE = function(r, t, e, n) {
    if (r = +r, t = t >>> 0, !n) {
      let c = Math.pow(2, 8 * e - 1);
      x(this, r, t, e, c - 1, -c);
    }
    let o = e - 1, u = 1, f = 0;
    for (this[t + o] = r & 255;--o >= 0 && (u *= 256); )
      r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
    return t + e;
  };
  h.prototype.writeInt8 = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  };
  h.prototype.writeInt16LE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  };
  h.prototype.writeInt16BE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  };
  h.prototype.writeInt32LE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  };
  h.prototype.writeInt32BE = function(r, t, e) {
    return r = +r, t = t >>> 0, e || x(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  h.prototype.writeBigInt64LE = I(function(r, t = 0) {
    return pr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  h.prototype.writeBigInt64BE = I(function(r, t = 0) {
    return sr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function lr(i, r, t, e, n, o) {
    if (t + e > i.length)
      throw new RangeError("Index out of range");
    if (t < 0)
      throw new RangeError("Index out of range");
  }
  function ar(i, r, t, e, n) {
    return r = +r, t = t >>> 0, n || lr(i, r, t, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), T.write(i, r, t, e, 23, 4), t + 4;
  }
  h.prototype.writeFloatLE = function(r, t, e) {
    return ar(this, r, t, true, e);
  };
  h.prototype.writeFloatBE = function(r, t, e) {
    return ar(this, r, t, false, e);
  };
  function yr(i, r, t, e, n) {
    return r = +r, t = t >>> 0, n || lr(i, r, t, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), T.write(i, r, t, e, 52, 8), t + 8;
  }
  h.prototype.writeDoubleLE = function(r, t, e) {
    return yr(this, r, t, true, e);
  };
  h.prototype.writeDoubleBE = function(r, t, e) {
    return yr(this, r, t, false, e);
  };
  h.prototype.copy = function(r, t, e, n) {
    if (!h.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (e || (e = 0), !n && n !== 0 && (n = this.length), t >= r.length && (t = r.length), t || (t = 0), n > 0 && n < e && (n = e), n === e || r.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (e < 0 || e >= this.length)
      throw new RangeError("Index out of range");
    if (n < 0)
      throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length), r.length - t < n - e && (n = r.length - t + e);
    let o = n - e;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, e, n) : Uint8Array.prototype.set.call(r, this.subarray(e, n), t), o;
  };
  h.prototype.fill = function(r, t, e, n) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (n = t, t = 0, e = this.length) : typeof e == "string" && (n = e, e = this.length), n !== undefined && typeof n != "string")
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !h.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (r.length === 1) {
        let u = r.charCodeAt(0);
        (n === "utf8" && u < 128 || n === "latin1") && (r = u);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < e)
      throw new RangeError("Out of range index");
    if (e <= t)
      return this;
    t = t >>> 0, e = e === undefined ? this.length : e >>> 0, r || (r = 0);
    let o;
    if (typeof r == "number")
      for (o = t;o < e; ++o)
        this[o] = r;
    else {
      let u = h.isBuffer(r) ? r : h.from(r, n), f = u.length;
      if (f === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (o = 0;o < e - t; ++o)
        this[o + t] = u[o % f];
    }
    return this;
  };
  var R = {};
  function z(i, r, t) {
    R[i] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: r.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
      }
      get code() {
        return i;
      }
      set code(n) {
        Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
      }
      toString() {
        return `${this.name} [${i}]: ${this.message}`;
      }
    };
  }
  z("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
    return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  z("ERR_INVALID_ARG_TYPE", function(i, r) {
    return `The "${i}" argument must be of type number. Received type ${typeof r}`;
  }, TypeError);
  z("ERR_OUT_OF_RANGE", function(i, r, t) {
    let e = `The value of "${i}" is out of range.`, n = t;
    return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? n = nr(String(t)) : typeof t == "bigint" && (n = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (n = nr(n)), n += "n"), e += ` It must be ${r}. Received ${n}`, e;
  }, RangeError);
  function nr(i) {
    let r = "", t = i.length, e = i[0] === "-" ? 1 : 0;
    for (;t >= e + 4; t -= 3)
      r = `_${i.slice(t - 3, t)}${r}`;
    return `${i.slice(0, t)}${r}`;
  }
  function Zr(i, r, t) {
    C(r, "offset"), (i[r] === undefined || i[r + t] === undefined) && S(r, i.length - (t + 1));
  }
  function wr(i, r, t, e, n, o) {
    if (i > t || i < r) {
      let u = typeof r == "bigint" ? "n" : "", f;
      throw o > 3 ? r === 0 || r === BigInt(0) ? f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : f = `>= ${r}${u} and <= ${t}${u}`, new R.ERR_OUT_OF_RANGE("value", f, i);
    }
    Zr(e, n, o);
  }
  function C(i, r) {
    if (typeof i != "number")
      throw new R.ERR_INVALID_ARG_TYPE(r, "number", i);
  }
  function S(i, r, t) {
    throw Math.floor(i) !== i ? (C(i, t), new R.ERR_OUT_OF_RANGE(t || "offset", "an integer", i)) : r < 0 ? new R.ERR_BUFFER_OUT_OF_BOUNDS : new R.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i);
  }
  var Qr = /[^+/0-9A-Za-z-_]/g;
  function vr(i) {
    if (i = i.split("=")[0], i = i.trim().replace(Qr, ""), i.length < 2)
      return "";
    for (;i.length % 4 !== 0; )
      i = i + "=";
    return i;
  }
  function H(i, r) {
    r = r || 1 / 0;
    let t, e = i.length, n = null, o = [];
    for (let u = 0;u < e; ++u) {
      if (t = i.charCodeAt(u), t > 55295 && t < 57344) {
        if (!n) {
          if (t > 56319) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (u + 1 === e) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          n = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && o.push(239, 191, 189), n = t;
          continue;
        }
        t = (n - 55296 << 10 | t - 56320) + 65536;
      } else
        n && (r -= 3) > -1 && o.push(239, 191, 189);
      if (n = null, t < 128) {
        if ((r -= 1) < 0)
          break;
        o.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0)
          break;
        o.push(t >> 6 | 192, t & 63 | 128);
      } else if (t < 65536) {
        if ((r -= 3) < 0)
          break;
        o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
      } else if (t < 1114112) {
        if ((r -= 4) < 0)
          break;
        o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return o;
  }
  function rt(i) {
    let r = [];
    for (let t = 0;t < i.length; ++t)
      r.push(i.charCodeAt(t) & 255);
    return r;
  }
  function tt(i, r) {
    let t, e, n, o = [];
    for (let u = 0;u < i.length && !((r -= 2) < 0); ++u)
      t = i.charCodeAt(u), e = t >> 8, n = t % 256, o.push(n), o.push(e);
    return o;
  }
  function xr(i) {
    return j.toByteArray(vr(i));
  }
  function M(i, r, t, e) {
    let n;
    for (n = 0;n < e && !(n + t >= r.length || n >= i.length); ++n)
      r[n + t] = i[n];
    return n;
  }
  function g(i, r) {
    return i instanceof r || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name;
  }
  function J(i) {
    return i !== i;
  }
  var it = function() {
    let i = "0123456789abcdef", r = new Array(256);
    for (let t = 0;t < 16; ++t) {
      let e = t * 16;
      for (let n = 0;n < 16; ++n)
        r[e + n] = i[t] + i[n];
    }
    return r;
  }();
  function I(i) {
    return typeof BigInt > "u" ? et : i;
  }
  function et() {
    throw new Error("BigInt not supported");
  }
});
var y = {};
Ur(y, { Blob: () => ot, Buffer: () => Er.Buffer, File: () => ut, atob: () => ht, btoa: () => ft, constants: () => lt, createObjectURL: () => ct, default: () => Br.Buffer, isAscii: () => pt, isUtf8: () => st, kMaxLength: () => nt, kStringMaxLength: () => K, resolveObjectURL: () => at, transcode: () => yt });
w(y, O(b()));
var Br = O(b());
var Er = O(b());
var K = 2 ** 32 - 1;
var nt = 9007199254740991;
var { Blob: ot, File: ut, atob: ht, btoa: ft } = globalThis;
var { createObjectURL: ct } = URL;
var pt = (i) => ArrayBuffer.isView(i) ? i.every((r) => r < 128) : i.split("").every((r) => r.charCodeAt(0) < 128);
var st = (i) => {
  throw new Error("Not implemented");
};
var lt = { __proto__: null, MAX_LENGTH: K, MAX_STRING_LENGTH: K, BYTES_PER_ELEMENT: 1 };
function at(i) {
  throw new Error("Not implemented");
}
function yt(i, r, t) {
  throw new Error("Not implemented");
}
var export_Buffer = Er.Buffer;
var export_default = Br.Buffer;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
