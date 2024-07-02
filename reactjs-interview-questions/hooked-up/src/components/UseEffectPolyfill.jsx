import { useRef } from "react";
export const useCustomEffect = (effect, deps) => {
    //on first render
    let isFistRender = useRef(true);
    let preDeps = useRef([]);

    if (isFistRender.current) {
        isFistRender.current = false;
        preDeps.current = deps || [];
        const cleanUp = effect();
        return (() => {
            if (cleanUp && typeof cleanUp == 'function') {
                cleanUp();
            }
        })()
    }

    //on deps array change


    const isDepsChange = deps ? (
        JSON.stringify(deps) !== JSON.stringify(preDeps.current)
    ) : true;

    if (isDepsChange) {
        const cleanUp = effect();
        if (cleanUp && typeof cleanUp == 'function' && deps) {
            cleanUp();
        }
    }

    preDeps.current = deps || [];
    //function cleanup

}