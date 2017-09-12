export class AnimatedCurves {

    public static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';

    /**
     * 移动进出屏幕范围
     * 进入屏幕使用减速
     * 减速曲线
     */
    public static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    /**
     * 永久离开屏幕
     * 加速曲线
     */
    public static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    /**
     * 临时离开屏幕
     * 尖锐曲线
     */
    public static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
}

/** @docs-private */
export class AnimationDurations {
    public static COMPLEX = '375ms';
    public static ENTERING = '225ms';
    public static EXITING = '195ms';
}
