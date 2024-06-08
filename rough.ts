trackCommonEvent = async (event: Events, properties?: TrackingProperties) => {
  if (this.activeTools.length == 0) {
    this.pendingEvents.push({
      event,
      properties,
    });
  } else {
    const updatedProperties = removeUndefined({
      ...getEventCommonProperties(this._productDetails),
      ...properties,
    });
    await this.blockingQueue.enqueue(async () => {
      const promises = this.activeTools().map(
        async (tool) =>
          await tool.trackCommonEvent?.(
            removeUndefined(event),
            updatedProperties
          )
      );
      await Promise.all(promises);
    });
  }
};


export function useTracking<Tcategory extends String, TAction extends string>(trackingTools: TrackingTool[], productDetails: productDetails): useTracking<Tcategory, TAction>{
    const tracking = useMemo(() => new Tracking(trackingTools, productDetails), [])
    return {
        trackCommonEvent: tracking.trackCommonEvent
    }
}
